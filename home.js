document.addEventListener('DOMContentLoaded', () => {
    const exploreButton = document.getElementById('explore-button');
    const routePlatform = document.getElementById('route-platform');
    const findRouteButton = document.getElementById('find-route-button');
    const startLocationInput = document.getElementById('start-location');
    const endLocationInput = document.getElementById('end-location');
    const routeResult = document.getElementById('route-result');

    // Show route platform when "Explore Now" is clicked
    exploreButton.addEventListener('click', () => {
        routePlatform.style.display = 'block';
    });

    // Find the best route when "Find Best Route" is clicked
    findRouteButton.addEventListener('click', async () => {
        const startLocation = startLocationInput.value;
        const endLocation = endLocationInput.value;

        if (!startLocation || !endLocation) {
            alert('Please enter both starting location and destination.');
            return;
        }

        // Fetch the best route using an AI-based API
        try {
            const route = await fetchBestRoute(startLocation, endLocation);
            routeResult.innerHTML = `<p><strong>Best Route:</strong> ${route}</p>`;
        } catch (error) {
            routeResult.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        }
    });

    // Function to fetch the best route (mock implementation)
    async function fetchBestRoute(start, end) {
        const apiKey = 'UsVkwD5tWdKuRGnGLtCqOzK1Zpho3zCp';
        const baseUrl = 'https://api.tomtom.com/routing/1/calculateRoute';
        
        // Encode the start and end locations properly
        const encodedStart = encodeURIComponent(start);
        const encodedEnd = encodeURIComponent(end);
    
        // Construct the URL for TomTom API
        const url = `${baseUrl}/${encodedStart}:${encodedEnd}/json?key=${apiKey}&traffic=true`;
    
        try {
            const response = await fetch(url);
            const data = await response.json();
    
            if (data.error) {
                throw new Error(data.error.description || 'Failed to fetch route.');
            }
    
            // Extracting the best route summary
            const route = data.routes[0]?.summary?.text || 'No route summary available';
            return route;
        } catch (error) {
            console.error('Error fetching route:', error);
            throw new Error('Could not fetch route from TomTom API.');
        }
    }
    
});
