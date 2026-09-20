<div className="restaurant-info">
                  <h3>{item.name}</h3>

                  <p>{item.description}</p>

                  <p
                    style={{
                      marginTop: "12px",
                      fontWeight: 700,
                    }}
                  >
                    {item.price.toLocaleString("ar-IQ")} د.ع
                  </p>

                  <div style={{ marginTop: "15px" }}>
                    <AddButton
                      id={item.id}
                      name={item.name}
                      price={item.price}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
