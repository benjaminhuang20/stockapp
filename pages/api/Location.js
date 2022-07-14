
export default async function Location(req, res) {
    const url = 'https://api.myptv.com/geocoding/v1/locations/by-text?'
        + new URLSearchParams({
            searchText: req.query.searchText,
        });

    var headers = {
        ApiKey: 'ZGQxOTk2ODM0ZjU5NGRiMjg1ODViZGRkNTc0MmFjYjE6YTM0YTg4MTgtYjRiZi00YTU0LTg3NDgtZDg0M2U0N2U4NWE2',
    }
    
    const stat = await fetch(url, { method: 'GET', headers: headers })
        .then((res) => res.json());
    res.status(200).json({
        latitude: stat.locations[0].referencePosition.latitude,
        longitude: stat.locations[0].referencePosition.longitude,
    });

}
