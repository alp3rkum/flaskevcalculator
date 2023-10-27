from flask import Flask
from flask import render_template
from flask import request, redirect

from flaskevfunc import *

app = Flask(__name__)

pageNumber = -1
themeIndex = 0

@app.route("/help", methods=["GET"])
def help():
    return render_template("help.html",title="Help",pageNumber=pageNumber,curRoute=request.path)

@app.route("/calculate", methods=["GET","POST"])
def calculate():
    global pageNumber
    if request.method == 'POST':
        match pageNumber:
            case 0:
                veht = request.form['veht']
                vwt = request.form['vwt']
                voltage = request.form['voltage']
                amper = request.form['amper']
                vmax = request.form['vmax']
                btype = request.form['btype']
                (res1,res2) = FlaskEVRange(veht,vwt,voltage,amper,vmax,btype)
                return render_template("result.html",title="Range Result",result=round(res1),result2=round(res2,2),pageNumber=pageNumber,curRoute=request.path)
            case 1:
                watt = request.form['watt']
                gvw = request.form['gvw']
                (res1,res2) = FlaskEVAcc(watt,gvw)
                return render_template("result.html",title="Acceleration Result",result=round(res1,2),result2=round(res2,2),pageNumber=pageNumber,watt=watt,curRoute=request.path)
            case 2:
                voltage = request.form['voltage']
                amper = request.form['amper']
                range = request.form['range']
                comparison = request.form['compare']
                (res1, res2, res3) = FlaskEVCost(voltage,amper,range,comparison)
                return render_template("result.html",title="Cost Calculation Result",result=round(res1,2),result2=round(res2,2),result3=round(res3,2),compType=comparison,pageNumber=pageNumber,curRoute=request.path)
        print(pageNumber)
        
    else:
        return render_template("result_err.html",curRoute=request.path)

@app.route("/cost",methods=["GET"])
def cost():
    global pageNumber
    pageNumber = 2
    print(pageNumber)
    return render_template("cost.html",title="Flask EV Cost Calculator",pageNumber=pageNumber,curRoute=request.path)

@app.route("/accel",methods=["GET"])
def accel():
    global pageNumber
    pageNumber = 1
    return render_template("accel.html",title="Flask EV Acceleration Calculator",pageNumber=pageNumber,curRoute=request.path)

@app.route("/range",methods=["GET"])
def range():
    global pageNumber
    pageNumber = 0
    return render_template("range.html",title="Flask EV Range Calculator",pageNumber=pageNumber,curRoute=request.path)

@app.route("/", methods=["GET"])
def home():
    global pageNumber
    pageNumber = -1
    return render_template("index.html",title="Flask EV Calculator Home Page",pageNumber=pageNumber,curRoute=request.path)

if __name__ == '__main__':
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.run(debug=True)