interface Deployment {
    dateAnalysis: string;
    // Add other fields as needed
  }
  
  interface LastAnalysis {
    domSize: {
      displayValue: number;
      complianceLevel: string;
    };
    nbRequest: {
      displayValue: number;
      complianceLevel: string;
    };
    dateAnalysis: string;
    // Add other fields as needed
  }
  
  interface JSONData {
    allowW3c: string;
    deployments: {
      greenit: Deployment[];
      lighthouse: Deployment[];
      w3c: any[]; // Assuming w3c data structure is not known
    };
    lastAnalysis: {
      greenit: LastAnalysis;
      lighthouse: {
        performance: {
          displayValue: number;
          complianceLevel: string;
        };
        accessibility: {
          displayValue: number;
          complianceLevel: string;
        };
        dateAnalysis: string;
        // Add other fields as needed
      };
      w3c: null;
    };
  }
  
  // Fetch the JSON data from the API
  async function fetchJSONData(): Promise<JSONData> {
    const response = await fetch('http://localhost:4444/api/greenit/project?projectName=eco-sonar-test');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  }
  
  // Usage
  fetchJSONData()
    .then((jsonData) => {
      // Accessing data
      console.log(jsonData.allowW3c);
      console.log(jsonData.deployments.greenit[0].dateAnalysis);
      console.log(jsonData.lastAnalysis.greenit.domSize.displayValue);
    })
    .catch((error) => {
      console.error('Error fetching JSON data:', error);
    });
  