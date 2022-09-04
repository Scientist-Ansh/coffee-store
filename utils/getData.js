const query = `
query MyQuery {
  aboutuses {
    aboutUsSection {
      title
      description {
        text
      }
      image {
        url
      }
    }
    button {
      type
      text
      linkTo
    }
  }
  deliveryServices {
    features {
      title
      description
      image {
        url
      }
    }
  }
  heroSections {
    heroSection {
      title
      description {
        text
      }
      image {
        url
      }
    }
    button {
      text
      type
      linkTo
    }
  }
  popularNows {
    allSnacks {
      id
      singleSnack {
        title
        served
        rating
        price
        description
        image {
          url
        }
      }
    }
  }
}
`;

export function getData() {
  return fetch(
    'https://api-eu-central-1.hygraph.com/v2/cl7g1qjp77gtf01ul92ovbom3/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query,
      }),
    }
  );
}
