import paho.mqtt.client as paho
port=1883
host = "20.121.50.236"
user="xte8pmbxww2477ju"
passw="%ws4!u#9a?$5)SKX"
keepalive = 60
def on_publish(client,userdata,result):
    print("data published \n")
    pass
client1= paho.Client("control1")
client1.connect(host,port,user,passw,keepalive)
ret= client1.publish("Robot","Robot 1 move_left")