# 检测主机状态
# 检测 192.168.4.{0-254}网段哪些主机开机

#!/bin/bash

for i in {1...254}
do
    ping -c 2 -i 1 -w 1 192.168.4.$i > /dev/null 2>&1
    if [ $? -eq 0 ]; then
        echo -e "ip:192.168.4.$i up"   | tee -a up.txt
    else
        echo -e "ip:192.168.4.$i down" | tee -a down.txt
    fi
done