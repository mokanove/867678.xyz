# There are server config code , only for Ubuntu and Debian.

> Need root.
>
> And Ubuntu or debian operating system.

## proxy.sh:

> Proxy Cloudflare IP.

```
wget https://github.com/mokanove/servers/raw/main/depoly%20codes/proxy.sh &&sudo sh proxy.sh
```

Delete:

```
rm proxy.sh && iptables -t nat -F
```

------

## speedtest.sh:

> Use the Speedtest by Ookla tool to test the server internet speed.


```
wget https://github.com/mokanove/servers/raw/main/depoly%20codes/speedtest.sh &&sudo sh speedtest.sh
```

Delete:

```
It will be autoremove so you don't do anything
```

------



# The author is not responsible for any consequences of using this code.
