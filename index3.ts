function passwordStrengthChecker(password: string): {1: boolean, 2: boolean, 3: boolean, 4: boolean} {
    let hasSpecialChar = false;
    let hasCapitalLetter = false;
    let isStartingWithNumber = false;
    
    if (password.length < 10) {
        return {1: false, 2: false, 3: false, 4: false};
    }
    
    if (!/^\d/.test(password)) {
        isStartingWithNumber = true;
    }
    
    for (let i = 0; i < password.length; i++) {
        const char = password.charAt(i);
        if (!/^[a-zA-Z0-9]+$/.test(char)) {
            hasSpecialChar = true;
        } else if (/[A-Z]/.test(char)) {
            hasCapitalLetter = true;
        }
        if (hasSpecialChar && hasCapitalLetter && isStartingWithNumber) {
            break;
        }
    }
    
    return {
        1: true,
        2: hasSpecialChar && hasCapitalLetter && isStartingWithNumber,
        3: hasCapitalLetter,
        4: !isStartingWithNumber
    };
}