class Requests {
    static createTeam(team: any): Promise<any> {
        return fetch('https://petproject-aa1ae-default-rtdb.firebaseio.com/teams.json', {
            method: 'POST',
            body: JSON.stringify(team),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(response => {
                return team = {
                    avatar: team.avatar,
                    createdAt: team.createdAt,
                    id: response.name,
                    name: team.name
                }
            })
    }

    static deleteTeam(data: any): Promise<any> {
        return fetch(`https://petproject-aa1ae-default-rtdb.firebaseio.com/teams/${data.teamId}.json`, {
            method: 'DELETE',
        }).then(res => {
            return res;
        })
    }

    static getTeams(): Promise<any> {
        return fetch('https://petproject-aa1ae-default-rtdb.firebaseio.com/teams.json')
            .then(res => res.json())
            .then(response => {
                const teams = []

                for (const key in response) {
                    teams.push({
                        avatar: response[key].avatar,
                        createdAt: response[key].createdAt,
                        id: key,
                        name: response[key].name,
                    })
                }

                return teams;
            })
    }

    static getMembers(teamKey): Promise<any> {
        return fetch(`https://petproject-aa1ae-default-rtdb.firebaseio.com/teams/${teamKey}/members.json`)
            .then(res => res.json())
            .then(response => {
                const members = []

                for (const key in response) {
                    members.push({
                        avatar: response[key].avatar,
                        id: key,
                        name: response[key].name,
                        teamId: teamKey
                    })
                }

                return members;
            })
    }

    static addMember(data): Promise<any> {
        return fetch(`https://petproject-aa1ae-default-rtdb.firebaseio.com/teams/${data.teamKey.selectedTeam}/members.json`, {
            method: 'POST',
            body: JSON.stringify(data.member),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(response => {
                return data.member = {
                    avatar: data.member.avatar,
                    createdAt: data.member.createdAt,
                    id: response.name,
                    name: data.member.name
                }
            })
    }

    static deleteMember(data): Promise<any> {
        return fetch(`https://petproject-aa1ae-default-rtdb.firebaseio.com/teams/${data.teamId}/members/${data.memberId}.json`, {
            method: 'DELETE'
        }).then(res => {
            return res;
        })
    }
}

export default Requests;