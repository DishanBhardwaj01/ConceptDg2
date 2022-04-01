import email
from email import message
from django.conf import settings
from django.core.mail import send_mail
from django.http import JsonResponse
from django.shortcuts import render,redirect
from django.template import context

def sendmail(request):

    try:
        print("in the Views !!!!!!!")
        name = request.GET.get('Name')
        email = request.GET.get('Email')
        message = request.GET.get('Message')
        subject = str(name) +" wants to contact us"
        message = email+ "\n"+message

        email_from = settings.EMAIL_HOST_USER
        recipient_list = [email_from, ]
        send_mail( subject, message, email_from, recipient_list)

        subject2 = "Contact Request Received"
        message2 = "Your message has been received by us. Thank you for contacting us. Our representative would be contacting you very soon.\n Thank you"

        recipient_list=[email,]
        send_mail(subject2,message2,email_from,recipient_list)

        context['statusCode']="200"

        return redirect('/',context)
    except:
        return redirect("/")
