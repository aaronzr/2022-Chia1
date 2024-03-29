## SSHing into AWS instance

***NOTE: IP address in Step 2 has changed*** due to upgrading the instance (see 5/30 entry)

1. `git pull` from your local repo if you are not up-to-date.
2. Change the permissions on the certificate file: `chmod 400 ~/2022-Chia1/aws/ubuntu.pem`
3. From _this directory_ (`2022-Chia1/aws/`) in your local repo, run: `ssh -i ~/2022-Chia1/aws/ubuntu.pem ubuntu@ec2-35-175-109-209.compute-1.amazonaws.com`. 
4. Inside the instance, confirm that you have `sudo` priveleges: `sudo whoami`

Official AWS docs:
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html

## Updates

### TODO:
Establish SSH tunnel to instance for moving large files: https://medium.com/serverlessguru/what-is-a-ssh-tunnel-aws-ec2-8ebc394b8208

Backup server regularly using snapshots or parallel server via AWS dashboard 

Get SSL certificate on AWS instance with nginx (so we have `https` instead of `http`):
* https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/SSL-on-amazon-linux-2.html
* https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html

Jay suggested this website
* https://letsencrypt.org/

<!-- Other tutorials that I did not follow:
  * https://www.twilio.com/blog/deploy-flask-python-app-aws
  * https://medium.com/techfront/step-by-step-visual-guide-on-deploying-a-flask-application-on-aws-ec2-8e3e8b82c4f7 -->

### 6/8
* ***Added some server-side files we worked on to `server_files/`*** so that the teaching team can see them in case they are unable to access the instance.
* I synced my entire v2 blockchain (_again_, from scratch, since it was corrupted!) and moved it to the instance via `scp`. As of around June 2, we have had a full-fledged Chia node running on AWS!
* Server-side Chia node can successfully submit transactions to the mainnet Chia blockchain by running `python 2022-Chia1/chia-contracts/piggybank/shell_command.py <hash_value>` (Ende, Finn, and I wrote this). Here `<hash_value>` is `hash(wallet_address + ipfs_url)`, but for testing purposes, it can be any string.
* See `requests_test/` for GET and POST request tests. Server responds to POST request by using the body to create a Chia smart coin, sending the transaction to the Chia mempool (to be added to the blockchain), and returning info about the transaction.

### 5/30
* Finn and I both finished moving our respective local blockchains to the instance
  * His is a fully-synced `v1` blockchain, mine is a 90% synced `v2`
* Started the Chia node on my blockchain; instance crashed instantly and terminal became unresponsive. :')
* Figured out why instance was crashing: Chia node and Nginx together exhaust the CPU resources of the node.
  * Upgraded to `t2.medium` instance (2 CPU, 4 GB RAM), up from `t2.micro` (1 CPU, 1 GB RAM)
    * https://aws.amazon.com/ec2/instance-types/t2/
    * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-resize.html#change-instance-type-of-ebs-backed-instance
  * Added alarms that notify me by email when CPU load >80% or >2 s.d. above moving average
    * https://us-east-1.console.aws.amazon.com/cloudwatch/home?region=us-east-1#alarmsV2:alarm/awsec2-i-0fc73562225da41b7-GreaterThanOrEqualToThreshold-CPUUtilization?
* ***Instance IP address has changed*** and the name of the instance is now `ec2-35-175-109-209.compute-1.amazonaws.com`. _Update this address in all code that talks to the instance!_
* Added some simple Python test scripts that send `GET` and `POST` requests to the server (`requests_test/` in this repo). Run these before you conclude that it's the server's fault. ;)

### 5/23
* Able to send requests with Python `requests` module:
  * https://www.geeksforgeeks.org/get-post-requests-using-python/
  * https://stackoverflow.com/questions/10313001/is-it-possible-to-make-post-request-in-flask
* `sqlite3 blockchain_v2_mainnet.sqlite ".dump" | sqlite3 new.db &` started producing a file `new.db` that grew to 83GB over several days, then crashed on Sunday night and left me with an empty file.  
* I inferred that the corrupt part must be somewhere past 83GB, so I truncated the file to 85GB using https://linuxconfig.org/how-to-truncate-file-on-linux. 
* Next things to try, per https://stackoverflow.com/questions/18259692/how-to-recover-a-corrupt-sqlite3-database:
  * `sqlite3 broken.db ".recover" | sqlite3 new.db` (currently running)
  * `sqlite3 mydata.db ".dump" > db_script.sql` followed by `sqlite3 recovered.db < db_script.sql`
* Local Chia blockchain is 49GB (started again from scratch while `".dump"` command was running on 5/20). Moved it to AWS and started syncing there in a different user's home directory (`aaron`) while other commands try to recover the larger blockchain in the `ubuntu` home directory.

### 5/20
* Moved a nearly-complete Chia blockchain to AWS server and initiated server-side syncing
* Syncing failed because the 109 GB database is corrupt, most likely because my computer crashed once or twice while syncing.
  * https://www.reddit.com/r/chia/comments/q1sklt/sqlite3databaseerror_database_disk_image_is/
  * https://github.com/Chia-Network/chia-blockchain/issues/8694
* Attempting to recover database using either `".dump"` or `".recover"` sqlite3 methods
  * https://stackoverflow.com/questions/18259692/how-to-recover-a-corrupt-sqlite3-database/57872238#57872238 
  * Currently running in background: `sqlite3 blockchain_v2_mainnet.sqlite ".dump" | sqlite3 new.db &`
* Expanded volume to 500 GB because the `".dump"` operation started making a whole new copy of the blockchain alongside the old one, and it wasn't going to fit on 150 GB. Now we have plenty of room to experiment.

### 5/17
* **Backend server is up!** http://ec2-35-175-109-209.compute-1.amazonaws.com
* Expanded the EC2 storage from a 30 GB `gp3` instance (included in free tier) to a 150 GB `io1` instance. This is necessary because the fully-synced Chia blockchain is 120 GB. It also raises the ceiling on input/output operations per second, so we can write data to the drive faster (I think). We are now paying $0.125 per GB per month out of the AWS credits Colin gave us. 
  * https://aws.amazon.com/ebs/pricing/?nc1=h_ls
  * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/requesting-ebs-volume-modifications.html
  * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recognize-expanded-volume-linux.html
* Set up Flask server on instance that can respond to `GET` and `POST` requests from a browser.
  * Tutorials I used: 
  * https://flask.palletsprojects.com/en/2.1.x/quickstart/ 
  * https://medium.com/techfront/step-by-step-visual-guide-on-deploying-a-flask-application-on-aws-ec2-8e3e8b82c4f7
  * https://linuxconfig.org/how-to-setup-NGINX-reverse-proxy
* **Currently, we have to restart the entire instance** (`sudo reboot`) **for any changes to the Flask app** `helloworld/app.py` **to take effect.** May find a workaround for this later, but not worth it right now. Tried the following, did not work:
  * ~https://linuxconfig.org/how-to-restart-nginx-on-linux~

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
