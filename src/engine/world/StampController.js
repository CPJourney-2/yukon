export default class StampController {

    constructor(world) {
        this.world = world

        this.stampsObject = {}
        this.subCategoryMap = {}
        this.totalStampsMap = {}
        this.groupMap = {}

        for(let group of this.world.crumbs.stamps) {
            //for getStamp
            for(let stamp of group.stamps) {
                this.stampsObject[stamp.stamp_id] = stamp
            }

            //for getSubCategories
            if(!(group.parent_group_id in this.subCategoryMap)) this.subCategoryMap[group.parent_group_id] = []
            this.subCategoryMap[group.parent_group_id].push(group)

            //groupMap
            this.groupMap[group.group_id] = group
        }
    }

    get all() {
        let stampArray = []
        for(let group of this.world.crumbs.stamps) {
            stampArray = [...stampArray, ...group.stamps]
        }
        return stampArray
    }

    getStamp(stampId) {
        return this.stampsObject[stampId]
    }

    getSubGroups(groupId) {
        return this.subCategoryMap[groupId]
    }

    getGroup(groupId) {
        return this.groupMap[groupId]
    }

    totalStamps(groupId) {
        // if you define a category as a parent of itself, this will loop indefinitely, that is not currently considered an edge case worth patching
        let group = this.groupMap[groupId]
        if(!group) return -1

        if(this.totalStampsMap[groupId]) return this.totalStampsMap[groupId]

        let stamps = [...(group.stamps)]
        if(this.subCategoryMap[group.group_id]) for(let _group of this.subCategoryMap[group.group_id]) {
            stamps.push(...this.totalStamps(_group.group_id))
        }
        return this.totalStampsMap[groupId] = stamps
    }

    filteredStampsForTotal(unlockedStamps, groupId) {
        let stamps = this.totalStamps(groupId).map(e => {return e.stamp_id})
        return unlockedStamps.filter(e => {return stamps.includes(e)})
    }

}
