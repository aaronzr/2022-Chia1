## SSHing into AWS instance
 
1. Download the `.pem` file with your name on it.  This is a certificate which generates your public key.

2. From the directory containing your certificate, run: `ssh -i <username>.pem <username>@ec2-44-202-213-142.compute-1.amazonaws.com`. Your password is currently your username, but feel free to change it.

3. In the instance, confirm that you have `sudo` priveleges: `sudo whoami`

Official AWS docs:
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html
