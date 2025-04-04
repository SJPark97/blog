import { GetPageResponse, ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints"

export const convertNotionhqToNotionClient = (pageData: GetPageResponse, listData: ListBlockChildrenResponse) => {
    // const recordMap2 = {
    //     block: {
    //       [pageData.id]: {
    //         value: {
    //           id: pageData.id,
    //           version: 1,
    //           type: 'page',
    //           properties: {
    //             title: [
    //               [
    //                 pageData.properties.title.title[0].text.content
    //               ]
    //             ]
    //           },
    //           content: listData.results.map((block) => block.id),
    //           permissions:[
    //                  {
    //                     role:"reader",
    //                     type:"public_permission",
    //                     added_timestamp:1743745564002,
    //                     is_public_share_link:true
    //                  }
    //               ],
    //               created_time:1743071340040,
    //               last_edited_time:1743745563839,
    //               parent_id:"1badee7c-b4ee-80d6-b20c-f0a51de8728b",
    //               parent_table:"block",
    //               alive:true,
    //               space_id:"ca3529c7-d4c6-412f-8a33-7c55e067f562"
    //         }
    //       }
    //     },
    //     role: "reader"
    //   }
    //   function typeConvert(type: string) {
    //     switch (type) {
    //       case 'heading_1':
    //         return 'header'
    //       case 'heading_2':
    //         return 'sub_header'
    //       case 'heading_3':
    //         return 'sub_sub_header'
    //       case 'bulleted_list_item':
    //         return 'bulleted_list'
    //       case 'numbered_list_item':
    //         return 'numbered_list'
    //       case 'paragraph':
    //         return 'text'
    //       default:
    //         return type
    //     }
    //   }
    //   listData.results.forEach((block) => {
    //     let properties: any = undefined
    //     // console.log(block, block.type)
    //     block[block.type].rich_text?.forEach((text => {
    //       properties = {
    //         title: [
    //           [
    //             text.plain_text,
    //             text.annotations.bold ? [[ "b" ]] : undefined,
    //           ],
    //         ]
    //       }
    //     }))
    //     recordMap2.block[block.id] = {
    //       value: {
    //         id: block.id,
    //         version: 1,
    //         type: typeConvert(block.type),
    //         properties,
    //         "created_time":1743124986773,
    //         "last_edited_time":1743124986776,
    //         parent_id: pageData.id,
    //         "parent_table":"block",
    //         alive:true,
    //         "space_id":"0"
    //       },
    //       role: "reader",
    //     }
    //   })
}