document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var inputVal = document.getElementById('search-input').value;
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Limpiar resultados anteriores

    // Asegúrate de tener un solo array 'data' con los elementos a buscar
    var data = [
        'Sensores Inteligentes',
        'Actuadores',
        'RFID',
        'NFC',
        'Redes Mesh',
        'IPv6',
        '5G',
        'LPWAN',
        'Bluetooth Low Energy',
        'Zigbee',
        'Z-Wave',
        'Wi-Fi HaLow',
        'Sigfox',
        'LoRaWAN',
        'MQTT',
        'CoAP',
        'Edge Computing',
        'Fog Computing',
        'Plataformas IoT',
        'Gateways IoT',
        'Dispositivos Wearables',
        'Smart Home',
        'Ciudades Inteligentes',
        'Vehículos Conectados',
        'Agricultura Inteligente',
        'Salud Digital'
    ];

    // Filtrar los datos basándose en el valor ingresado
    var filteredData = data.filter(function(item) {
        return item.toLowerCase().includes(inputVal.toLowerCase());
    });

    // Mostrar resultados en etiquetas <p>
    filteredData.forEach(function(item) {
        var p = document.createElement('p');
        p.textContent = item;
        resultsDiv.appendChild(p);
    });
});

