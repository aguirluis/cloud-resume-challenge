// Replace this with your Azure Function URL once deployed
const apiUrl = "https://YOUR-FUNCTION-APP.azurewebsites.net/api/visitorCounter";

async function updateVisitorCount() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        document.getElementById("visitor-count").textContent = data.count;
    } catch (error) {
        console.error("Error fetching visitor count:", error);
        document.getElementById("visitor-count").textContent = "N/A";
    }
}

updateVisitorCount();
