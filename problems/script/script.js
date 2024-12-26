const { firefox } = require("playwright");

async function applyForJobs() {
  // Connect to the running Firefox instance with remote debugging enabled
  const browser = await firefox.connect({
    wsEndpoint: "ws://localhost:9222/devtools/browser/<your-browser-id>", // Replace with actual browser WebSocket endpoint
  });

  const page = await browser.newPage();

  // Go to LinkedIn Job Search page (React.js Developer in India)
  await page.goto(
    "https://www.linkedin.com/jobs/search/?keywords=React.js%20Developer&location=India"
  );
  await page.waitForSelector(".job-card-container"); // Ensure job cards are loaded

  // Get job links from the page
  const jobLinks = await page.$$eval(".job-card-container__link", (links) =>
    links.map((link) => link.href)
  );

  // Loop through the jobs and apply
  for (const jobLink of jobLinks) {
    console.log("Applying for:", jobLink);
    await page.goto(jobLink);

    // Wait for Apply button and click it
    await page.waitForSelector(".jobs-s-apply button");
    await page.click(".jobs-s-apply button");

    // Wait for the submit button to appear and click it
    await page.waitForSelector(".artdeco-button--primary");
    await page.click(".artdeco-button--primary");

    console.log("Application submitted successfully for:", jobLink);

    // Wait for a short time before moving to the next job
    await page.waitForTimeout(2000); // Adjust the delay if needed
  }

  // Close the browser after applying to all jobs
  await browser.close();
}

applyForJobs();
