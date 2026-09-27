import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

const SKILL_COMMAND = "/skill:project-documentation-reconciliation";

export default function docsExtension(pi: ExtensionAPI) {
  pi.registerCommand("docs", {
    description: "Reconcile project docs with verified code, Notion, and Linear state",
    handler: async (args, ctx) => {
      const request = args.trim();
      const prompt = request ? `${SKILL_COMMAND} ${request}` : SKILL_COMMAND;

      if (ctx.isIdle()) {
        pi.sendUserMessage(prompt);
        return;
      }

      pi.sendUserMessage(prompt, { deliverAs: "followUp" });
      ctx.ui.notify("docs reconciliation queued", "info");
    },
  });
}
