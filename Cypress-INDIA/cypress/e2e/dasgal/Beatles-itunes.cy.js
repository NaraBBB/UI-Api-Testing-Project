//**Search for the term "The Beatles" and limit the results set to 5. Write the response.

describe("", () => {
  it.only("gaigui ajilasan 1", () => {
    cy.request(
      "GET",
      "http://itunes.apple.com/search?term=The+Beatles&limit=1"
    ).then((response) => {
      let responseBody = response.body;
      //! If the response is a string, parse it as JSON
      if (typeof responseBody === "string") {
        responseBody = JSON.parse(responseBody);
      }
      expect(responseBody.results[0]).to.include({
        collectionId: 1439484338,
        artistName: "Bob Spitz",
        collectionName: "The Beatles (Abridged)",
      });
    });
  });

  it("gaigui ajilasan 2", () => {
    cy.request(
      "GET",
      "http://itunes.apple.com/search?term=The+Beatles&limit=1"
    ).then((response) => {
      expect(response.status).to.eq(200);
      let responseBody = response.body;
      // If the response is a string, parse it as JSON
      if (typeof responseBody === "string") {
        responseBody = JSON.parse(responseBody);
      }
      expect(responseBody).to.have.property("resultCount", 1);
      expect(responseBody.results[0].collectionId).to.eq(1439484338); // Validate collectionId
      expect(responseBody.results[0]).to.have.property(
        "collectionId",
        1439484338
      );
    });
  });

  it("muu ajilasan ", () => {
    cy.request(
      "GET",
      "http://itunes.apple.com/search?term=The+Beatles&limit=1"
    ).then((response) => {
      const cleanJson = (data) =>
        JSON.stringify(data)
          .replace(/\\\//g, "/")
          .replace(/\\n/g, " ")
          .replace(/<\\\/b>/g, "</b>");

      cy.request(
        "GET",
        "http://itunes.apple.com/search?term=The+Beatles&limit=1"
      ).then((response) => {
        cy.log("Cleaned JSON:", cleanJson(response.body));
      });
    });
  });
  //! AJILAAGUI GARUUD ENE DOODUUL
  const expectedResponse = {
    resultCount: 1,
    results: [
      {
        wrapperType: "audiobook",
        artistId: 160778930,
        collectionId: 1439484338,
        artistName: "Bob Spitz",
        collectionName: "The Beatles (Abridged)",
        collectionCensoredName: "The Beatles (Abridged)",
        artistViewUrl:
          "https://books.apple.com/us/author/bob-spitz/id160778930?uo=4",
        collectionViewUrl:
          "https://books.apple.com/us/audiobook/the-beatles-abridged/id1439484338?uo=4",
        artworkUrl60:
          "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/69/b8/65/69b86591-ce4b-9bd0-ab71-3808d0ea06dc/9780743552455.jpg/60x60bb.jpg",
        artworkUrl100:
          "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/69/b8/65/69b86591-ce4b-9bd0-ab71-3808d0ea06dc/9780743552455.jpg/100x100bb.jpg",
        collectionPrice: 19.99,
        collectionExplicitness: "cleaned",
        trackCount: 1,
        country: "USA",
        currency: "USD",
        releaseDate: "2005-11-01T08:00:00Z",
        primaryGenreName: "Biographies & Memoirs",
        previewUrl:
          "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/8a/3b/60/8a3b60b6-8b98-ec66-4193-2410ade915b6/mzaf_3719604921631393408.std.aac.p.m4a",
        description:
          "<b>2007 Audie Award Winner for Non-Fiction, Abridged</b><br /><br />Even before the Beatles hit the big time, a myth was created. This version of the Beatles legend smoothed the rough edges and filled in the fault lines, and for more than forty years this manicured version of the Beatles story has sustained as truth -- until now.<br /> The product of almost a decade of research, hundreds of unprecedented interviews, and the discovery of scores of never-before-revealed documents, Bob Spitz's <i>The Beatles</i> is the biography fans have been waiting for.<br /> Never before has a biography of musicians been so immersive and textured. We are there in the McCartney living room when Paul and John learn to write songs together; backstage the night Ringo takes over on drums; in seedy German strip clubs where George lies about his age so the band can perform; and at the <i>Ed Sullivan Show</i> as America discovers the joy and the madness. From Shea to San Francisco, through the London night, on to India, through marmalade skies, across the universe-all the way to a rooftop concert and one last moment of laughter and music.<br /> It is all here, the highs and the lows, the love and the rivalry, the drugs, the tears, the thrill, the magic never again to be repeated. Bob Spitz's masterpiece is, at long last, the biography the Beatles deserve.",
      },
    ],
  };
  it("efr", () => {
    cy.api({
      method: "GET",
      url: "http://itunes.apple.com/search?term=Beatles",
      qs: { limit: 1 },
      header: {
        "Accept": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.equal(expectedResponse); // Compare as objects
      })
    });
  

  it("ajilaagui ", () => {
    cy.api({
      method: "GET",
      url: "http://itunes.apple.com/search?term=The+Beatles&limit=5"
    }).then((response) => {
      expect(response.status).to.eq(200);

      let responseBody = response.body
      if(typeof responseBody === "string"){
      responseBody = JSON.parse(responseBody)
      }
    let 
    })
  });
});
