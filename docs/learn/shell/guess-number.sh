#!/bin/bash

num=$[RANDOM%100+1]

echo "---- 猜数开始 ----"
while :
do
    read -p " 计算机生成了一个 1-100 的随机数，你猜:" cat 
    if [ $cat -eq $num ];then
        echo "猜对了 "
        break
    elif [ $cat -le $num ];then
        echo "小了 "
    else
        echo "大了"
    fi
done