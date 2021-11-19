
echo 'HMI installer initiated -credits: Dag' &&
sleep 3 &&
echo 'creating autostart folder, deleting if available' &&
sudo rm -rf /home/pi/.config/autostart &&
mkdir /home/pi/.config/autostart &&
sleep 3 &&
echo 'creating the startup.sh file at /home/pi' &&
echo "/usr/bin/python3 /home/pi/project/l_screens/app.py" > /home/pi/startup.sh &&
chmod 755 /home/pi/startup.sh &&

sleep 3 &&
echo 'creating startip.desktop file' &&
printf '%s\n' '[Desktop Entry]' 'Type=Application' 'Name=startup' 'Exec=/home/pi/startup.sh' > /home/pi/.config/autostart/startup.desktop &&
sleep 3 &&
echo 'you can now add commands you want to run on boot on the startup file. they will run after the GUI has loaded' &&

sleep 3 &&
echo 'creating cronjobs to restart the raspberry every 6am, 2am and 10pm. always ensure that there is internet so that the system time will always be accurate' &&
cronjob1="0 6 * * * /sbin/shutdown -r now" &&
cronjob2="0 14 * * * /sbin/shutdown -r now" &&
cronjob3="0 22 * * * /sbin/shutdown -r now" &&
( crontab -l | grep -v -F "$cronjob1" ; echo "$cronjob1" ) | crontab - &&
( crontab -l | grep -v -F "$cronjob2" ; echo "$cronjob2" ) | crontab - &&
( crontab -l | grep -v -F "$cronjob3" ; echo "$cronjob3" ) | crontab - &&

sleep 3 &&
echo 'installation complete :) ...'


