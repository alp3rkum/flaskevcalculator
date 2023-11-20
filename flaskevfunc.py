"""
Flask EV Calculator Functions
"""
def FlaskEVRange(veht,vwt,voltage,amper,vmax,btype,bage=0):
        deGrade = 1
        #Primary calculations
        bcp = float(voltage)*float(amper) #battery capacity
        match(int(veht)):
            case 0:
                drag = 0.5
            case 1 | 2:
                drag = 0.7
            case 3:
                drag = 0.8
            case 4:
                drag = 0.6
        bdens = int(btype) #battery density
        #Secondary calculations
        spdConst = pow(int(vmax),3)/pow(10,4) #constant to calculate the resistance vehicle performs
        match(bdens):
             case 30: deGrade = 0.965
             case _: deGrade = 0.98
        bwt = bcp/bdens #battery weight !important
        gvwt = (int(vwt)+int(bwt))+75 #gross (total) vehicle weight
        #Third level calculations
        rres = gvwt * int(vmax) * 0.001 #rolling resistance
        totalDegrade = pow(deGrade,int(bage))
        bcp *= totalDegrade
        #Fourth level calculations
        tres = (drag*spdConst)+rres #total resistance
        #Fifth level calculations
        pwc = tres*65 #total wattage needed to overcome the resistance (the multiplification is because the tres variable has too low of a value)
        cruiseSpeed = int(vmax)*0.75 #average cruising speed
        #Sixth level calculations
        endur = (bcp/pwc) #total endurance
        #Seventh level calculations
        vehRange = endur*cruiseSpeed #vehicle range
        consump = round(bcp/vehRange,2) # energy consumption
        return vehRange, consump

def FlaskEVAcc(watt,gvw,age=0):
     print("Age:" + str(age))
     tvw = int(gvw) + 75
     watt = int(watt)
     time1 = (tvw / (watt/745.699872) ) * (pow((25/96.5580),3))
     time1 = round(time1,2)*(100/(100-int(age)))
     time2 = (tvw / (watt/745.699872) ) * (pow((45/96.5580),3))
     time2 = round(time2,2)*(100/(100-int(age)))
     return time1,time2

def FlaskEVCost(volt,amper,range,comparison='Don\'t Compare'):
    watt = float(volt)*float(amper)
    wattKm = watt/float(range)
    kmCost = None
    if comparison != "Don't Compare":
        match comparison:
            case "50cc Moped":
                kmCost = (2.2*35.8)/100
            case "125cc Motorcycle":
                kmCost = (2.4*35.8)/100
            case "150cc Motorcycle":
                 kmCost = (2.6*35.8)/100
            case "Treeporter":
                 kmCost = (3.5*35.8)/100
            case "Car (Diesel)":
                 kmCost = (5.5*35.8)/100
            case "Car (Gasoline)":
                 kmCost = (7.5*35.8)/100
        return ( (watt/1000)*1.5017, (wattKm/1000)*1.5017, kmCost )