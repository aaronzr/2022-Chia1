## SSHing into AWS instance
 
1. Download the `.pem` file with your name on it.  This is a certificate which generates your public key.

2. _From the directory containing your certificate,_ run: `ssh -i <username>.pem <username>@ec2-44-202-213-142.compute-1.amazonaws.com`. Your password is currently your username, but feel free to change it.

3. In the instance, confirm that you have `sudo` priveleges: `sudo whoami`

Official AWS docs:
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html

## Updates

### 4/29
* Installed Chia blockchain on AWS instance following the "Ubuntu/Debian / Install using the repository" section of this: https://github.com/Chia-Network/chia-blockchain/wiki/INSTALL#install-from-source.  I only installed the CLI version, not the GUI.
* Installed Docker Engine per https://docs.docker.com/engine/install/ubuntu/
  * Everyone has `sudo` priveleges, but if you get tired of prefacing docker commands with `sudo` then follow these instructions: https://docs.docker.com/engine/install/linux-postinstall/
* Installed official Chia docker container per https://github.com/Chia-Network/chia-docker/pkgs/container/chia
