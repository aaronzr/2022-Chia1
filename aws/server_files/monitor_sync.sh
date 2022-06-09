#!/bin/bash

LOG='/home/ubuntu/sync.log'

# ensure that I am 'ubuntu', who owns the Chia node
if [ $USER != 'ubuntu' ] 
then
	echo 'You are '$USER'; please run me as ubuntu: `sudo su - ubuntu`';
	echo `date`': Script failed because it was run as '$USER' instead of ubuntu.' >> $LOG;
	exit 1;
fi

# extract the sync line from `chia show -s` and write to log
echo `date`': '`chia show -s | grep -i sync` >> $LOG;
