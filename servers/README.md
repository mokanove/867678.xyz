# These are some servers with special features.

## Los Angeles , California , USA (LAX) :

> Speedtest:
>
> [Download file from this server.](https://867678.xyz/projects/speedtest)
>
> ![](LAX.png)
>


Domain:
```
us-lax1.867678.xyz
```


IPv4:

```
74.48.125.113
```

IPv6:

```
2607:f130:0000:0153:0000:0000:ae12:43b5
```
```
2607:f130:0000:0153:0000:0000:d7fa:9ca5
```
```
2607:f130:0000:0153:0000:0000:f239:9af0
```

------

## Osaka , Kansai , Japan (OSA2):

> Speedtest:
>
> [Download file from this server](https://867678.xyz/projects/speedtest)
>
>![](OSA2.png)

Domain:
```
jp-osa2.867678.xyz
```

IPv4:

```
64.176.62.7
```

IPv6:

```
2401:c080:3800:2342:5400:05ff:feb7:2e27
```

------


# Cloudflare free services.

## Speedtest URL :

> Cloudflare R2
>
> ![](https://imagedelivery.net/wSMYJvS3Xw-n339CbDyDIA/456430b7-1c8f-42b0-71c0-586ad9172700/public)
>

```
https://867678.xyz/projects/speedtest
```

------

# What can them do?
### Speedtest
#### Iperf3

> These servers has iperf3 service , you can using : test download
```
iperf3 -c [IP/Domain] -R
```

>OR using : test upload
```
iperf3 -c [IP/Domain]
```

#### HTTP Download

#### Proxy IP(SNI IP)

> If you using cloudflare workers build vless proxy
>
> You will need proxy IP , Without them, you won't be able to open your Cloudflare website.
>
> You can fill in the server domain name, just like "const proxyIPs = ["us-lax1.867678.xyz:8443"];"
>
> On these servers, ports 80, 443, 2052, 2082, and 8080 are reverse proxied to Cloudflare CDN. If your Cloudflare speed is very slow, you can try to configure IP force pointing to get high speed from these servers.














