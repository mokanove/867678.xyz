#!/bin/bash
echo "Do you want do this? It will you 80 443 2082 2052 8080 port is proxied and off your firewall."
echo "The author is not responsible for any consequences of using this code."
echo "The project with XIU2:https://github.com/XIU2/CloudflareSpeedTest"
echo "And it isn't support IPV6 or you need change iptable to ip6tables."
echo "You need allow iptables and ip6tables as deamon."
read -p "Please press enter start install , or using ctrl+c to exit." a
sudo apt update && sudo apt install iptables-persistent netfilter-persistent -y
wget https://github.com/XIU2/CloudflareSpeedTest/releases/download/v2.3.4/cfst_linux_amd64.tar.gz
tar -zxvf cfst_linux_amd64.tar.gz
rm ip.txt ipv6.txt cfst_hosts.sh 使用+错误+反馈说明.txt cfst_linux_amd64.tar.gz
wget -O ip.txt https://www.cloudflare.com/ips-v4/
chmod 755 cfst
./cfst
CIP=$(awk -F',' 'NR==2 {print $1}' result.csv)
echo "Your best Cloudflare IP is "$CIP
rm result.csv ip.txt cfst proxy.sh
read -p "To proxy CloudflareCDN enter:enter to next , or ctrl+c to exit" a
echo 1 > /proc/sys/net/ipv4/ip_forward
iptables -t nat -F
iptables -t nat -A PREROUTING -p tcp --dport 80 -j DNAT --to-destination $CIP:80
iptables -t nat -A PREROUTING -p tcp --dport 443 -j DNAT --to-destination $CIP:443
iptables -t nat -A PREROUTING -p tcp --dport 2082 -j DNAT --to-destination $CIP:2082
iptables -t nat -A PREROUTING -p tcp --dport 2052 -j DNAT --to-destination $CIP:2052
iptables -t nat -A PREROUTING -p tcp --dport 8080 -j DNAT --to-destination $CIP:8080
iptables -t nat -A POSTROUTING -p tcp -d $CIP --dport 80 -j MASQUERADE
iptables -t nat -A POSTROUTING -p tcp -d $CIP --dport 443 -j MASQUERADE
iptables -t nat -A POSTROUTING -p tcp -d $CIP --dport 2082 -j MASQUERADE
iptables -t nat -A POSTROUTING -p tcp -d $CIP --dport 2052 -j MASQUERADE
iptables -t nat -A POSTROUTING -p tcp -d $CIP --dport 8080 -j MASQUERADE
iptables -t nat -L -n -v
netfilter-persistent save
echo "The script is finished running, and the proxy CloudflareCDN has been successfully set up on port 80 443 2052 2082 8080."
