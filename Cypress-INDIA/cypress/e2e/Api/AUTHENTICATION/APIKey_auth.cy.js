  
        describe('API-KEY AUTH, KEY AND VALUE', () => {
            it('Fetch 7-day weather forecast', () => {
                cy.api({
                    method: 'GET',
                    url: 'https://api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=7',
                    qs: {
                        appid: '03b702d101272892fb01059741f7fca0' // API KEY AND VALUE
                    }
                }).then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body).to.have.property('list');
                    expect(response.body.list).to.have.length(7);
                   
                });
            });
        });
        
