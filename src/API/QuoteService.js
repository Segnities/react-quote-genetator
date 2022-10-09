import axios from "axios";

class QuoteService {
    static async getQuote() {
        const response = await axios.get("https://api.adviceslip.com/advice");

        return response;
    }
}

export default QuoteService;