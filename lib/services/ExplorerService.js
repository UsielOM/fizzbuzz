class ExplorerService {

    static filterByMission(explorers, mission) {
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission;
    }

    static getAmountOfExplorersByMission(explorers, mission) {
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        return explorersByMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        const explorersUsernames = explorersByMission.map((explorer) => explorer.githubUsername);
        return explorersUsernames;
    }
    static getExplorersStackSkill(explorers, stack) {

        const explorerSatack = explorers.filter((explorer) => {
            return explorer.stacks.includes(stack)
        });

        return explorerSatack;
    }

}

module.exports = ExplorerService;