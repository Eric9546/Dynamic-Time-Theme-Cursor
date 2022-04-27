var today = new Date();
var time = today.getHours();
document.addEventListener('keydown', logKey);

const themes = {
    'dawn': {
        images: {
            theme_frame: 'assets/dawn.png',
        },
        colors: {
            frame: '#FCFAFA',
            tab_background_text: 'white',
        }
    },

    'daytime': {
        images: {
            theme_frame: 'assets/daytime.png',
        },
        colors: {
            frame: '#FCFAFA',
            tab_background_text: 'black',
        }
    },

    'dusk': {
        images: {
            theme_frame: 'assets/dusk.png',
        },
        colors: {
            frame: '#FCFAFA',
            tab_background_text: 'black',
        }
    },

    'night': {
        images: {
            theme_frame: 'assets/night.png',
        },
        colors: {
            frame: '#FCFAFA',
            tab_background_text: 'white',
        }
    }
};

if ((time >= 5) && (time < 8)) {
    console.log("dawn"); 
    browser.theme.update(themes[`dawn`]);
}

else if ((time > 8) && (time < 17)) {
    console.log("daytime");
    browser.theme.update(themes[`daytime`]);
}

else if ((time >= 17) && (time < 20)) {
    console.log("dusk");
    browser.theme.update(themes[`dusk`]);
}

else {
    console.log("night");
    browser.theme.update(themes[`night`]);
    
}

function logKey(e)
{
    if (`${e.code}` == "F9") {

        if ((time >= 5) && (time < 8)) {
            document.documentElement.style.cursor = "url(https://i.imgur.com/8d6u3KR.png?1), pointer";
        }

        else if ((time > 8) && (time < 17)) {
            document.documentElement.style.cursor = "url(https://i.imgur.com/JiDU53Z.png?1), pointer";
        }

        else if ((time >= 17) && (time < 20)) {
            document.documentElement.style.cursor = "url(https://i.imgur.com/lmVsQYk.png?1), pointer";
        }

        else {
            document.documentElement.style.cursor = "url(https://i.imgur.com/kZYQL1K.png?3), pointer";
        }

    }

    else if (`${e.code}` == "F8") {

        document.body.style.cursor = 'default';
    }

}

