const html = document.querySelector("html");
const links = document.getElementsByClassName("link");
const inputDiv = document.querySelector(".inputs");
const inputSpan = document.getElementsByClassName("inputSpan");
const linkSpan = document.getElementsByClassName("linkSpan");
const buttons = document.getElementsByTagName("button")

span = null;


function changeTheme()
{

    switch(sessionStorage.getItem("themeIndex"))
    {
        case "0":
            html.style.backgroundColor = "rgb(240,240,240)";
            html.style.color = "black";
            if(span)
            {
                if(span.classList.contains("dark"))
                span.classList.remove("dark");
                if(span.classList.contains("blue"))
                    span.classList.remove("blue");
            }
            
            if(document.querySelector(".inputs"))
            {
                if(document.querySelector(".inputs").classList.contains("dark"))
                    document.querySelector(".inputs").classList.remove("dark");
                if(document.querySelector(".inputs").classList.contains("blue"))
                    document.querySelector(".inputs").classList.remove("blue");
            }

            for(const link of links)
            {
                if(link.classList.contains("dark"))
                    link.classList.remove("dark");
                if(link.classList.contains("blue"))
                    link.classList.remove("blue");
            }
            for(const span of inputSpan)
            {
                if(span.classList.contains("dark"))
                    span.classList.remove("dark");
                if(span.classList.contains("blue"))
                    span.classList.remove("blue");
            }
            for(const span of linkSpan)
            {
                if(span.classList.contains("dark"))
                    span.classList.remove("dark");
                if(span.classList.contains("blue"))
                    span.classList.remove("blue");
            }
            if(buttons)
            {
                for(const button of buttons)
                {
                    if(button.classList.contains("dark"))
                        button.classList.remove("dark");
                    if(button.classList.contains("blue"))
                        button.classList.remove("blue");
                }
            }
            
            break;
        case "1":
            html.style.backgroundColor = "rgb(32,32,32)";
            html.style.color = "white";
            if(span)
            {
                if(span.classList.contains("blue"))
                    span.classList.remove("blue");
                span.classList.add("dark");
            }
            
            if(document.querySelector(".inputs"))
            {
                if(document.querySelector(".inputs").classList.contains("blue"))
                    document.querySelector(".inputs").classList.remove("blue");
                document.querySelector(".inputs").classList.add("dark");
            }

            for(const link of links)
            {
                if(link.classList.contains("blue"))
                    link.classList.remove("blue");
                link.classList.add("dark");
            }
            for(const span of inputSpan)
            {
                if(span.classList.contains("blue"))
                    span.classList.remove("blue");
                span.classList.add("dark");
            }
            for(const span of linkSpan)
            {
                if(span.classList.contains("blue"))
                    span.classList.remove("blue");
                span.classList.add("dark");
            }
            if(buttons)
            {
                for(const button of buttons)
                {
                    if(button.classList.contains("blue"))
                        button.classList.remove("blue");
                    button.classList.add("dark");
                }
            }

            break;
        case "2":
            html.style.backgroundColor = "rgb(16,32,96)";
            html.style.color = "white";
            if(span)
            {
                if(span.classList.contains("dark"))
                    span.classList.remove("dark");
                span.classList.add("blue");
            }

            if(document.querySelector(".inputs"))
            {
                if(document.querySelector(".inputs").classList.contains("dark"))
                    document.querySelector(".inputs").classList.remove("dark");
                document.querySelector(".inputs").classList.add("blue");
            }

            for(const link of links)
            {
                if(link.classList.contains("dark"))
                    link.classList.remove("dark");
                link.classList.add("blue");
            }
            for(const span of inputSpan)
            {
                if(span.classList.contains("dark"))
                    span.classList.remove("dark");
                span.classList.add("blue");
            }
            for(const span of linkSpan)
            {
                if(span.classList.contains("dark"))
                    span.classList.remove("dark");
                if(span.classList.contains("blue"))
                    span.classList.remove("blue");
            }
            if(buttons)
            {
                for(const button of buttons)
                {
                    if(button.classList.contains("dark"))
                        button.classList.remove("dark");
                    button.classList.add("blue");
                }
            }
    }
}
function restoreTransitions()
{
    document.querySelector("html").style.transitionDuration = '0.35s';
        for(const link of links)
            link.style.transitionDuration = '0.35s';
        for(const span of inputSpan)
            span.style.transitionDuration = '0.35s';
        for(const span of linkSpan)
            span.style.transitionDuration = '0.35s';
    if(span)
        document.querySelector("span").style.transitionDuration = '0.35s';
    if(document.querySelector(".inputs"))
        document.querySelector(".inputs").style.transitionDuration = '0.35s';
    if(buttons)
        {
            for(const button of buttons)
                button.style.transitionDuration = '0.35s';
        }
    
}

window.onload = function () {
    document.querySelector("html").style.transitionDuration = '0s';
    for(const link of links)
        link.style.transitionDuration = '0s';
    for(const span of inputSpan)
        span.style.transitionDuration = '0s';
    for(const span of linkSpan)
        span.style.transitionDuration = '0s';
    if(span)
    {
        if(document.getElementsByTagName("span").length > 0)
            span = document.getElementsByTagName("span")[0];
        document.querySelector("span").style.transitionDuration = '0s';
    }
    if(buttons)
    {
        for(const button of buttons)
            button.style.transitionDuration = '0s';
    }
    if(document.querySelector(".inputs"))
        document.querySelector(".inputs").style.transitionDuration = '0s';
    changeTheme();
    document.getElementById("white").checked = (sessionStorage.getItem("themeIndex") == 0);
    document.getElementById("dark").checked = (sessionStorage.getItem("themeIndex") == 1);
    document.getElementById("blue").checked = (sessionStorage.getItem("themeIndex") == 2);
    setTimeout(restoreTransitions,1000);
}