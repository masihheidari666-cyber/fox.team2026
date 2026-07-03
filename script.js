async function login() {
    if (!window.supabaseClient) {
        const success = window.initSupabase();
        if (!success) {
            alert("Supabase هنوز آماده نشده. صفحه را رفرش کنید.");
            return;
        }
    }

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("ایمیل و رمز عبور را وارد کنید");
        return;
    }

    try {
        const { data, error } = await window.supabaseClient.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) {
            alert("خطا: " + error.message);
        } else {
            document.getElementById("loginBox").style.display = "none";
            document.getElementById("panelBox").style.display = "block";
        }
    } catch (err) {
        alert("خطای غیرمنتظره: " + err.message);
    }
}

document.addEventListener("DOMContentLoaded", function () {

    document
        .getElementById("password")
        .addEventListener("keypress", function (event) {

            if (event.key === "Enter") {
                login();
            }

        });

});
function updatDateTime() {

    const now = new Date();

    const time = now.toLocaleTimeString('en-GB');

    const date = now.toLocaleDateString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    document.getElementById("clock").innerHTML = time;

    document.getElementById("date").innerHTML = date;
}
setInterval(updatDateTime, 1000);

updatDateTime();

