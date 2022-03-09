const a1 = ["work_time",
    "play_time",
    "study_time",
    "social_time",
    "exercise_time",
    "self_care_time"
]

const a2 = ["work_previous_time",
    "play_previous_time",
    "study_previous_time",
    "social_previous_time",
    "exercise_previous_time",
    "self_care_previous_time"
]

const a3 = ["32hrs",
    "10hrs",
    "4hrs",
    "5hrs",
    "4hrs",
    "2hrs"
]

const a4 = ["36hrs",
    "8hrs",
    "7hrs",
    "10hrs",
    "5hrs",
    "2hrs"
]

const a5 = ["103hrs",
    "23hrs",
    "13hrs",
    "21hrs",
    "11hrs",
    "7hrs"
]

const a6 = ["128hrs",
    "29hrs",
    "19hrs",
    "23hrs",
    "18hrs",
    "11hrs"
]
const a7 = ["5hrs",
    "1hr",
    "4hrs",
    "2hrs",
    "3hrs",
    "6hrs"
]

const a8 = ["7hrs",
    "2hrs",
    "1hr",
    "3hrs",
    "1hr",
    "1hr"
]
const a9 = ["text_week",
    "text_daily",
    "text_month"
]

function weakFunction() {
    for (let i = 0; i <= 5; i++) {
        document.getElementById(a1[i]).innerHTML = a3[i];
        document.getElementById(a2[i]).innerHTML = "Last week - " + a4[i];
    }
    for (let i = 0; i <= 2; i++) {
        if (a9[i] == "text_week") {
            document.getElementById(a9[i]).style.color = "white"
        } else {
            document.getElementById(a9[i]).style.color = "hsl(235, 45%, 61%)"
        }
    }
}

function monthFunction() {
    for (let i = 0; i <= 5; i++) {
        document.getElementById(a1[i]).innerHTML = a5[i];
        document.getElementById(a2[i]).innerHTML = "Last month - " + a6[i];
    }
    for (let i = 0; i <= 2; i++) {
        if (a9[i] == "text_month") {
            document.getElementById(a9[i]).style.color = "white"
        } else {
            document.getElementById(a9[i]).style.color = "hsl(235, 45%, 61%)"
        }
    }
}

function dayFunction() {
    for (let i = 0; i <= 5; i++) {
        document.getElementById(a1[i]).innerHTML = a7[i];
        document.getElementById(a2[i]).innerHTML = "Yesterday - " + a8[i];
    }
    for (let i = 0; i <= 2; i++) {
        if (a9[i] == "text_daily") {
            document.getElementById(a9[i]).style.color = "white"
        } else {
            document.getElementById(a9[i]).style.color = "hsl(235, 45%, 61%)"
        }
    }
}