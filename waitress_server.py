from waitress import serve
import app
serve(app.app, host='127.0.0.1',port=8080) #Can change the port if 8080 is occupied