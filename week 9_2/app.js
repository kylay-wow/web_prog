const start = Date.now();
    while(Date.now() - start < 50) {} // simulated blocking
    console.log('Main script loaded (should be deferred)');