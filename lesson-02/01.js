/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
const isAdmin = false;
const isVerifiedUser = true;
const hasSpecialPermission = true;
const hasTemporaryPass = false;
const admin = true;
const verifiedUser = true;
const specialPermission = true;
const temporaryPass = true; 


let isAccess

if  (admin === isAdmin && specialPermission === hasSpecialPermission ||
     verifiedUser === isVerifiedUser && temporaryPass === hasTemporaryPass ||
     admin === isAdmin && temporaryPass === hasTemporaryPass ||
     specialPermission === hasSpecialPermission && verifiedUser === isVerifiedUser) {
    isAccess = true;
    console.log(isAccess)
} else {
    isAccess = false;
    console.log(isAccess)
}
// your code
