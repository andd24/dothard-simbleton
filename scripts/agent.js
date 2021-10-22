export const Agent = ( agentObject ) => {
    return `
        <section class="agent">
            <h2 class="agent__name">${agentObject.name}</h2>
            <div class="agent__company">
                ${agentObject.company}
            </div>
            <div class="agent_phone">
                ${agentObject.phone}
            </div>
        </section>
    `
}