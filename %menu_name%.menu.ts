export default {
    menu_id: "%menu_name%",
    menu_value: "%menu_option%",
    description: "Option %menu_option% of menu %menu_name%",
    async execute(interaction: any, client: any) {
        return interaction.reply({ content: 'Option %menu_option% was from %menu_name% was selected!', components: [], ephemeral: false });
    }
};