function checkTheURL(inputText) {
    try {
        new URL(inputText); // Try to create a new URL object
        return true; 
    } catch (e) {
        return false; // If it throws an error, it's not a valid URL
    }
}

export { checkTheURL };
