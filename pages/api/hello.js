export default function handler(req, res) {
    const myobject = {
        text: "I'm Benjamin",
        name: "Benjamin",
        year: 12,
        school: {
            name: "HRS",
            grade: 7
        }
    }
    res.status(200).json(myobject);
}