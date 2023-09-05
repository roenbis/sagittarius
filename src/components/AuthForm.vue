<script></script>
<template>
    <div class="form-box">
            <div class="form-value">
                <form action="">
                    <h2>Login</h2>
                    <div class="input__box">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="email" required>
                        <label for="">Email</label>
                    </div>
                    <div class="input__box">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" required>
                        <label for="">Password</label>
                    </div>
                    <div class="forget">
                        <label for="">
                            <input type="checkbox">Remember Me <a href="/recover">Forget Password</a>
                        </label>
                    </div>
                    <button>Log in</button>
                    <div class="register">
                        <p>Do not have a account <a href="/register">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
</template>
<style></style>