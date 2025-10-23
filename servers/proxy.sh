#!/bin/bash
echo "Do you want do this? It will you 80 443 2082 2052 8080 port be proxied."
echo "The author is not responsible for any consequences of using this code."
echo "The project with XIU2:https://github.com/XIU2/CloudflareSpeedTest"
echo "And it not support IPV6"
read -p "Please press enter to start test , or using CTRL+C to exit." a
sudo apt update && sudo apt install iptables-persistent netfilter-persistent -y
wget https://github.com/XIU2/CloudflareSpeedTest/releases/download/v2.3.4/cfst_linux_amd64.tar.gz
tar -zxvf cfst_linux_amd64.tar.gz
rm ip.txt ipv6.txt cfst_hosts.sh 使用+错误+反馈说明.txt cfst_linux_amd64.tar.gz
wget -O ip.txt https://www.cloudflare.com/ips-v4/
chmod 755 cfst
./cfst -f ip.txt
CIP=$(awk -F',' 'NR==2 {print $1}' result.csv)
echo "Your best Cloudflare IP is "$CIP
rm result.csv ip.txt proxy.sh cfst
