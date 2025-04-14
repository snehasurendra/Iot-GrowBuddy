import paho.mqtt.client as mqtt

brokerURL = "mqtt.eclipseprojects.io"
brokerPort = 1883

def on_connect(client, userdata, flags, rc):
   print("Connected with result code "+str(rc))

def on_message(client, userdata, message):
   print("Received message '" + str(message.payload) + "' on topic '"
        + message.topic + "' with QoS " + str(message.qos))

def on_disconnect(client, userdata, rc):
    print("Client Got Disconnected")
    
mqttclient=mqtt.Client()

mqttclient.on_connent=on_connect
mqttclient.on_disconnect = on_disconnect
mqttclient.on_message = on_message

mqttclient.connect(brokerURL, brokerPort)
