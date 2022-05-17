## SSHing into AWS instance
 
1. `git pull` from your local repo if you are not up-to-date.
2. From _this directory_ (`2022-Chia1/aws/`) in your local repo, run: `ssh -i ubuntu.pem ubuntu@ec2-44-202-213-142.compute-1.amazonaws.com`. **This only works from the directory that contains `ubuntu.pem`.**
3. Inside the instance, confirm that you have `sudo` priveleges: `sudo whoami`

Official AWS docs:
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html

## Updates

### 5/17
* Expand the EC2 storage from a 30 GB `gp3` instance (included in free tier) to a 150 GB `io1` instance. This is necessary because the fully-synced Chia blockchain is 120 GB. It also raises the ceiling on input/output operations per second, so we can write data to the drive faster (I think). We are now paying $0.125 per GB per month out of the AWS credits Colin gave us. 
  * https://aws.amazon.com/ebs/pricing/?nc1=h_ls
  * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/requesting-ebs-volume-modifications.html
  * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recognize-expanded-volume-linux.html
#### TODO:
* Set up Flask server on instance that can respond to `GET` and `POST` requests from a browser.
  * https://flask.palletsprojects.com/en/2.1.x/quickstart/ 
  * https://www.twilio.com/blog/deploy-flask-python-app-aws
  * https://medium.com/techfront/step-by-step-visual-guide-on-deploying-a-flask-application-on-aws-ec2-8e3e8b82c4f7

### 5/10
https://www.reddit.com/r/aws/comments/qocgm4/how_to_send_post_http_request_to_aws_ec2_instance/hjotza9/

### 5/5
How to configure Chia node to use testnet rather than mainnet: https://github.com/Chia-Network/chia-blockchain/wiki/How-to-Connect-to-the-Testnet

### 4/30
* Added a `cron` job, shell script `sync_monitor.sh`, and log file `progress.log` to monitor blockchain sync progress.
* Discovered that Amazon might be throttling our free EC2 instance, since the syncing went from 20,000 to ~2,000 blocks per hour at some point. However, I found that you can replace the growing database `blockchain_v2_mainnet.sqlite` with one that is further along with the following procedure:
  1. **On AWS:** Shut down all Chia software 
    * `chia stop all`
  2. **On AWS:** Delete the Chia directories 
  * `rm -r ~/.chia/; rm -r ~/.chia_keys/`
  3. **On AWS:** Kill all chia processes, e.g. `chia_daemon`, so the necessary ports are free when we restart
  * `ps aux` to list all processes, `kill -9 <PID>` to kill each Chia process
  4. **From local:** Copy (`scp`) the database file you want to use to AWS. Note the `-i` option and the certificate path `/path/to/ubuntu.pem`, which are required to authenticate the copy operation, just like with `ssh`. <!-- (In fact, the `scp` documentation says this is passed directly to `ssh`.) --> 
  * `scp -i ~/2022-Chia1/aws/ubuntu.pem blockchain_v2_mainnet.sqlite ubuntu@ec2-44-202-213-142.compute-1.amazonaws.com:~`
  6. **On AWS:** Re-initialize the `.chia/` and `.chia_keys/` directories
  * `chia init; chia keys generate`
  7. **On AWS:** _**Before starting the Chia node,**_ replace the blockchain file created by `chia init` with the one from local, which should have landed in the home directory
  *  `cd .chia/mainnet/db/; rm blockchain_v2_mainnet.sqlite; cp ~/blockchain_v2_mainnet.sqlite .`
  8. **On AWS:** **_Only after replacing the blockchain file,_** start the chia node
  * `chia start node`
  9. **On AWS:** Wait a minute or two, then check the status of the blockchain. Note the output line that says something like `Current Blockchain Status: Syncing 125024/1912592 (1787568 behind).`
  * `chia show -s` You can also add a `-c` option to see who you're seeding the blockchain from: `chia show -s -c`

Current plan is to finish syncing my local blockchain file and then put the up-to-date chain into the AWS node.  Should take around 3 days.
   

### 4/29
* Installed Chia blockchain on AWS instance following the "Ubuntu/Debian / Install using the repository" section of this: https://github.com/Chia-Network/chia-blockchain/wiki/INSTALL#install-from-source.  I only installed the CLI version, not the GUI.
  * "Is it done syncing yet?" `chia show -s`
* Installed Docker Engine per https://docs.docker.com/engine/install/ubuntu/
  * **You need to use `sudo` to run Docker commands.** Everyone has `sudo` priveleges, but if you get tired of prefacing docker commands with `sudo` then follow these instructions: https://docs.docker.com/engine/install/linux-postinstall/
* Installed official Chia docker container per https://github.com/Chia-Network/chia-docker/pkgs/container/chia
