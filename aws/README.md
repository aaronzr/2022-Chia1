## SSHing into AWS instance
 
1. `git pull` from your local repo if you are not up-to-date.
2. From _this directory_ in your local repo, run: `ssh -i ubuntu.pem ubuntu@ec2-44-202-213-142.compute-1.amazonaws.com`. **This only works from the directory that contains `ubuntu.pem`.**
3. Inside the instance, confirm that you have `sudo` priveleges: `sudo whoami`

Official AWS docs:
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html

## Updates

### 4/29
* Installed Chia blockchain on AWS instance following the "Ubuntu/Debian / Install using the repository" section of this: https://github.com/Chia-Network/chia-blockchain/wiki/INSTALL#install-from-source.  I only installed the CLI version, not the GUI.
  * "Is it done syncing yet?" `chia show -s`
* Installed Docker Engine per https://docs.docker.com/engine/install/ubuntu/
  * **You need to use `sudo` to run Docker commands.** Everyone has `sudo` priveleges, but if you get tired of prefacing docker commands with `sudo` then follow these instructions: https://docs.docker.com/engine/install/linux-postinstall/
* Installed official Chia docker container per https://github.com/Chia-Network/chia-docker/pkgs/container/chia
