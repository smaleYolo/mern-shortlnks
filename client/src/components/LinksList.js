import React from "react";
import {Link} from "react-router-dom";

export const LinksList = ({ links }) => {
    if (!links.length){
        return <p className="center">Ссылок пока нет</p>
    }

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Номер</th>
                    <th>Оригинальная</th>
                    <th>Сокращенная</th>
                    <th>Открыть</th>
                </tr>
                </thead>

                <tbody>
                { links.map((link, index) => {
                    return (
                        <tr key={link._id}>
                            <td>{index + 1}</td>
                            <td>{link.from}</td>
                            <td>{link.to}</td>
                            <td>
                                <a href={`/detail/${link._id}`}>Открыть</a>
                            </td>
                        </tr>
                    )
                }) }

                </tbody>
            </table>
        </div>
    )
}