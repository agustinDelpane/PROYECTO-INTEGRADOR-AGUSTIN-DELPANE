import { mission } from "./data/mission.js";
import { values } from "./data/values.js";
import { vision } from "./data/vision.js";

const KEY_INSTITUTION = "institution";

const initialize = () => {
    const initialData = {
        name: "Rock Hard",
        address: "Av. Sarmiento 188, Buenos Aires, Argentina",
        phone: "11 2345-6789",
        email: "info@rockhardmusic.com",
        about: {
            mission: mission,
            vision: vision,
            values: values,
        },
    };

    localStorage.setItem(KEY_INSTITUTION, JSON.stringify(initialData));

    return initialData;
};

const getInstitutionFromLocalStorage = () => {
    const data = localStorage.getItem(KEY_INSTITUTION);
    return JSON.parse(data) || initialize();
};

const fetchInstitution = () => {
    return new Promise((resolve) => {
        resolve(getInstitutionFromLocalStorage());
    });
};

export default {
    fetchInstitution,
};