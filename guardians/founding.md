---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import StepCard from '@site/src/components/StepCard';
import InfoCard from '@site/src/components/InfoCard';

# Founding a Federation

:::tip[Before you start]
- Every guardian should have the same version of Fedimint installed and the Guardian UI open.
- Agree on the federation name, guardian count, enabled modules, and which guardian will set the global config.
:::

Founding a federation is the one-time ceremony where guardians configure the federation, exchange setup codes, and run distributed key generation (DKG). When the ceremony finishes, the federation is live and you can access the guardian admin UI.

## 1. Set up your guardian

Only one guardian should set the global config. That "leader" role only exists during setup so someone can enter the federation settings. After founding, the leader has no special privileges over the other guardians. Use the tabs in each section to switch between the leader and non-leader flow.

<Tabs groupId="guardian-role">
  <TabItem value="leader" label="Leader Guardian" default>

  <StepCard
    step={1}
    title="Choose your guardian name and password"
    images={[
      {
        src: "/img/founding/setup/create-empty.webp",
        alt: "Empty guardian creation form with fields for guardian name, password, and a Set the global config checkbox",
      },
      {
        src: "/img/founding/setup/leader-create-filled.webp",
        alt: "Guardian creation form filled for Alice before setting the global config",
      },
    ]}
  />

  Choose a guardian name and password. The name identifies the guardian to the other guardians and users. The password protects access to the Guardian UI and is used to encrypt your guardian backup.

  <StepCard
    step={2}
    title="Set the global config"
    images={[
      {
        src: "/img/founding/setup/leader-config-empty.webp",
        alt: "Leader configuration form after selecting Set the global config with empty federation name and guardian count fields",
      },
      {
        src: "/img/founding/setup/leader-config-filled.webp",
        alt: "Leader configuration form filled with a federation name and guardian count",
      },
      {
        src: "/img/founding/setup/leader-config-modules.webp",
        alt: "Leader configuration form with the advanced module selector expanded",
      },
    ]}
  />

  As the leader, check **Set the global config** and enter the federation settings.

  - **Federation name** is the human-readable name of the federation shown in the Guardian UI and shared with users.
  - **Total number of guardians** must include you. Use the full size of the ceremony, not just the guardians who have connected so far.
  - **Base fees** are enabled by default and discourage spam. The typical fee is only 1–3 sats per transaction regardless of the value transferred. We recommend keeping them enabled; this setting cannot be changed later.
  - **Modules** define what the federation can do. Only modify this if you know what you are doing. Disabled modules cannot be enabled later.

  :::note
  The guardian count must be either 1 or at least 4. For every 3 guardians, the federation can tolerate 1 malicious or offline guardian — so 4 tolerates 1, 7 tolerates 2, 10 tolerates 3, and so on.
  :::

  <StepCard
    step={3}
    title="Confirm and log in"
    images={[
      {
        src: "/img/founding/setup/login-empty.webp",
        alt: "Guardian login screen asking for the password after setup was confirmed",
      },
      {
        src: "/img/founding/setup/login-filled.webp",
        alt: "Guardian login screen with the password entered",
      },
    ]}
  />

  Click **Confirm** to store your guardian configuration, then log in with the password you just created.

  </TabItem>
  <TabItem value="normal" label="Other Guardians">

  <StepCard
    step={1}
    title="Choose your guardian name and password"
    images={[
      {
        src: "/img/founding/setup/create-empty.webp",
        alt: "Empty guardian creation form with fields for guardian name, password, and a Set the global config checkbox",
      },
      {
        src: "/img/founding/setup/normal-create-filled.webp",
        alt: "Guardian creation form filled for Bob without selecting Set the global config",
      },
    ]}
  />

  Enter a guardian name and password, then leave **Set the global config** unchecked. Only the temporary leader should enable it.

  <StepCard
    step={2}
    title="Confirm and log in"
    images={[
      {
        src: "/img/founding/setup/login-empty.webp",
        alt: "Guardian login screen asking for the password after setup was confirmed",
      },
      {
        src: "/img/founding/setup/login-filled.webp",
        alt: "Guardian login screen with the password entered",
      },
    ]}
  />

  Click **Confirm** to create the guardian locally, then log in with the password you just created. At this point you have not joined the federation yet; you have only created your guardian identity for the ceremony.

  </TabItem>
</Tabs>

## 2. Connect the guardians

:::tip
Exchange setup codes in an authenticated channel where every guardian can verify who sent them.
:::

<Tabs groupId="guardian-role">
  <TabItem value="leader" label="Leader Guardian" default>

  <StepCard
    step={1}
    title="Review the federation settings"
    images={[
      {
        src: "/img/founding/connect/leader-settings.webp",
        alt: "Leader guardian view showing the guardian name and federation settings including federation name, size, base fees, and enabled modules",
      },
    ]}
  />

  The leader sees the full federation configuration immediately after logging in. Review it one last time before the rest of the guardians begin confirming it.

  If the federation name, guardian count, or modules are wrong, restart the ceremony.

  <InfoCard
    title="Your setup code"
    image="/img/founding/connect/leader-setup-code.webp"
    alt="Leader setup code shown as a QR code with a Copy to Clipboard button"
  />

  Share your setup code with every other guardian. The setup code does not contain your password or private keys.

  <StepCard
    step={2}
    title="Add every other guardian"
    images={[
      {
        src: "/img/founding/connect/leader-add-guardians-empty.webp",
        alt: "Leader guardian list showing 1 of 4 guardians connected and a form to paste or scan another guardian setup code",
      },
      {
        src: "/img/founding/connect/leader-add-guardians-complete.webp",
        alt: "Leader guardian list showing all guardians connected and ready to confirm",
      },
    ]}
  />

  Paste or scan the setup code of each other guardian. The counter above the list shows how many guardians are connected.

  </TabItem>
  <TabItem value="normal" label="Other Guardians">

  <StepCard
    step={1}
    title="Paste the leader's setup code and verify the settings"
    images={[
      {
        src: "/img/founding/connect/normal-empty-settings.webp",
        alt: "Joining guardian view where the federation settings section says the leader's setup code has not been provided yet",
      },
      {
        src: "/img/founding/connect/normal-settings-visible.webp",
        alt: "Joining guardian view after the leader setup code was added, showing federation name, size, base fees, and enabled modules",
      },
    ]}
  />

  Before you add the leader, the federation settings section is blank. Once the leader's setup code is added, the federation name, guardian count, base-fee setting, and enabled modules appear. Verify that these match what your group agreed on before continuing.

  <InfoCard
    title="Your setup code"
    image="/img/founding/connect/normal-setup-code.webp"
    alt="Joining guardian setup code shown as a QR code with a Copy to Clipboard button"
  />

  After you log in, share your own setup code with the other guardians so they can add you to their lists.

  <StepCard
    step={2}
    title="Add every other guardian"
    images={[
      {
        src: "/img/founding/connect/normal-add-guardians-empty.webp",
        alt: "Joining guardian list with an empty add-guardian form and a warning to verify the guardian list before confirming",
      },
      {
        src: "/img/founding/connect/normal-add-guardians-partial.webp",
        alt: "Joining guardian list showing two guardians already added",
      },
      {
        src: "/img/founding/connect/normal-add-guardians-complete.webp",
        alt: "Joining guardian list showing all guardians added and the list marked complete",
      },
    ]}
  />

  Each non-leader guardian still has to collect setup codes from every other guardian, not just the leader. Continue adding guardians until the full list is present and the ceremony is ready to confirm.

  </TabItem>
</Tabs>

:::warning
Once guardians start the final confirmation step, the ceremony should be treated as fixed. Verify the guardian list and the federation settings carefully before continuing.
:::

## 3. Run key generation

<StepCard
  step={1}
  title="Confirm on every guardian and let DKG finish"
  images={[
    {
      src: "/img/founding/general/dkg-waiting.webp",
      alt: "Guardian UI showing the federation setup in progress and reminding guardians to confirm their settings",
    },
  ]}
/>

After the guardian list is complete, every guardian clicks **Confirm**. Fedimint then runs distributed key generation (DKG) and writes the initial federation configuration. Every guardian must stay online and responsive for DKG to complete successfully.

<StepCard
  step={2}
  title="Wait for the first consensus session"
  images={[
    {
      src: "/img/founding/general/dashboard-no-invite.webp",
      alt: "Guardian dashboard after founding with the invite code panel still waiting for the first consensus session",
    },
    {
      src: "/img/founding/general/dashboard-with-invite.webp",
      alt: "Guardian dashboard after founding with the invite code QR, copy button, and federation status panels visible",
    },
  ]}
/>

The dashboard appears before the invite code is ready. The invite code only shows up after the federation completes its first consensus session, which is usually a few minutes after DKG finishes. If you only see the placeholder message, wait and refresh the page.

:::note
If you use a local Bitcoin node, consensus will not start until the node is fully synced.
:::

## 4. Next steps

<StepCard
  step={1}
  title="Download your guardian backup"
  images={[
    {
      src: "/img/founding/general/guardian-backup.webp",
      alt: "Guardian configuration backup card with a Download Guardian Backup button",
    },
  ]}
/>

Every guardian should download the guardian backup once and store it securely. The backup is encrypted with the guardian password, so you need both the file and the password for recovery. Anyone who gets both can restore and run that guardian.

After the federation is live:

- Copy the invite code from the dashboard and share it with the users who should join the federation.
- Keep the guardian node online so consensus can continue and the federation stays healthy.
- If you enabled the Lightning module, register at least one Lightning gateway.

<InfoCard
  title="Register a Lightning gateway"
  image="/img/founding/general/add-gateway.webp"
  alt="Guardian dashboard form for adding a gateway URL"
/>

A federation can exist without a gateway, but users need at least one registered gateway for Lightning sends and receives. A gateway does not have to be run by a guardian. See the [Lightning Gateway documentation](https://github.com/fedimint/fedimint/blob/master/docs/gateway.md) for the next step.
