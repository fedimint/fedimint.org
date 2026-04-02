---
sidebar_position: 3
---

# Setup: Nodana

[Nodana](https://nodana.io/) is a managed hosting platform for Bitcoin applications. It handles server provisioning, networking, and TLS — you just pick a template and deploy. This is the fastest way to get a Fedimint guardian node running.

## Prerequisites

- A [Nodana](https://nodana.io/) account (you can sign up with Lightning or GitHub)

## Create an Account

Go to [nodana.io](https://nodana.io/) and log in with either **Lightning** or **GitHub**.

![Nodana login page](/img/setup/nodana/login.png)

## Add Balance

After logging in, navigate to the **Balance** page. Nodana charges per time of usage — the Fedimintd template costs approximately \$10/month (\$0.34/day). Use the slider to choose a top-up amount and click **Create Invoice** to get a Lightning invoice, then pay it with your wallet.

## Create a Project

Navigate to **Projects** in the top navigation bar and click **New Project** and then open the newly created project.

![New Project button](/img/setup/nodana/new-project.png)

## Deploy Fedimintd

From the app template list, select **Fedimintd**. Review the template details — it shows the monthly price and a link to learn more. Click **Deploy** to launch your guardian node.

<div className="img-row">
  <img src="/img/setup/nodana/select-app.png" alt="App template list with Fedimintd highlighted" />
  <img src="/img/setup/nodana/fedimintd-template.png" alt="Fedimintd template details with Deploy button" />
</div>

:::note
Nodana also offers a **Fedimintd Pro** template ($25/month) with more resources. For most federations the standard template is sufficient.
:::

## Verify Deployment

After a few seconds, your app will show as **running**. The details panel shows the version (0.10.0) and status. Note that for the setup ceremony all guardians have to be on the same version. To open the admin UI click the link in the service box (highlighted in red).

<div className="img-row">
  <img src="/img/setup/nodana/app-running.png" alt="Running Fedimintd app details" />
  <img src="/img/setup/nodana/app-running-zoom.png" alt="Fedimintd service link detail" />
</div>

## Access the Guardian UI

Click the project URL shown in the Nodana dashboard (or the card on the left) to open the **Fedimint Guardian UI** in your browser. You should see the setup page.

<div style={{textAlign: 'center'}}>
  <img src="/img/setup/nodana/guardian-ui.png" alt="Fedimint Guardian UI setup page" style={{width: '50%'}} />
</div>

From here, follow the [Founding a Federation](/guardians/founding) guide with your fellow guardians to complete the federation setup.
