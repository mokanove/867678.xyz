#!/bin/bash
echo "this command by speedtest offical website:https://www.speedtest.net/apps/cli"
echo "The author is not responsible for any consequences of using this code."
read -p "please press enter start install." a
echo "installing speedtest."
sudo rm /etc/apt/sources.list.d/ookla_speedtest-cli.list
sudo apt-get update
sudo apt-get install wget -y
sudo apt-get remove speedtest speedtest-cli -y
wget https://install.speedtest.net/app/cli/ookla-speedtest-1.2.0-linux-x86_64.tgz
tar -zxvf ookla-speedtest-1.2.0-linux-x86_64.tgz
rm speedtest.md ookla-speedtest-1.2.0-linux-x86_64.tgz
read -p "please press enter to start speedtest and you need agree policy." a
./speedtest
rm speedtest speedtest.sh speedtest.5
